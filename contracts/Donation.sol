//SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.0;

interface IERC721{
    function _setTokenURI(uint256 tokenId, string memory _tokenURI) external;
}

contract Donation{
    address public nftAddress;
    address payable public trustOwner;
    uint256 public trustCount;

    mapping(address=>donationData) public donations;
    mapping(uint256=>mapping(uint256=>trustDonationData)) trustDonations;

    struct donationData{
        uint256 amount;
        uint256 timesDonated;
    }

    struct trustDonationData{
        uint256 amount;
        address donor;
        uint256 time;
    }

    constructor(address _nftAddress, address payable _trustOwner, uint256 _trustCount) {
        nftAddress = _nftAddress;
        trustOwner = _trustOwner;
        trustCount = _trustCount;
    }

    function donate(uint256 _tokenID, string memory _tokenURI, uint256 _trustId) public payable {
        require(_trustId>=0 && _trustId < trustCount, "Trust does not exist.");
        require(msg.value>0, "Donation amount must be greater than 0.");

        uint256 donationAmount = msg.value;
        (bool success, ) = trustOwner.call{value: donationAmount}("");
        require(success, "Transfer failed.");
        
        donationData storage _donationData = donations[msg.sender];
        _donationData.amount += donationAmount;
        trustDonations[_trustId][_donationData.timesDonated] = trustDonationData(msg.value, msg.sender, block.timestamp);
        _donationData.timesDonated += 1;

        IERC721(nftAddress)._setTokenURI(_tokenID, _tokenURI);
    }

}