//SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.0;

import './Charity.sol';

contract Donation{
    address public nftAddress;
    address payable public trustOwner;
    uint256 public trustCount;
    
    mapping(address=>bool) public hasDonated;
    address[] donors;
    trustDonationData[] trustDonations;

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

    function getTrustDonations() public view returns(trustDonationData[] memory){
        return trustDonations;
    }

    function getDonors() public view returns(address[] memory){
        return donors;
    }

    function donate(string memory _tokenURI, uint256 _trustId) public payable {
        require(_trustId>=0 && _trustId < trustCount, "Trust does not exist.");
        require(msg.value>0, "Donation amount must be greater than 0.");
        uint256 donationAmount = msg.value;
        (bool success, ) = trustOwner.call{value: donationAmount}("");
        require(success, "Transfer failed.");
        
        if(hasDonated[msg.sender] == false || msg.value>=10 ether){
                uint256 tokenId = Charity(nftAddress).mint(_tokenURI);
        Charity(nftAddress).transferNftFrom(address(this), msg.sender, tokenId);
        }
        
        if(hasDonated[msg.sender] == false)
        donors.push(msg.sender);
        hasDonated[msg.sender] = true;
        trustDonations.push(trustDonationData(msg.value, msg.sender, block.timestamp));
    }

}