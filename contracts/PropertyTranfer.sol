pragma solidity >=0.4.22 <0.9.0;

contract PropertyTransfer {
    address ContractOwner;

    //getting current owner execution
    constructor() public {
        ContractOwner = msg.sender;
    }

    //setting structure
    struct property_struc {
        uint256 propertyId;
        address CurrentOwner_account;
        string PropertyAddress;
        address[] Prev_Owner_accounts;
    }

    mapping(uint256 => property_struc) public details;

    function uploadProperty(
        uint256 id,
        address new_Ower_Address,
        string memory propAddress
    ) public returns (bool) {
        address[] memory array;
        details[id] = property_struc(id, new_Ower_Address, propAddress, array);
        return true;
    }

    function transfer(uint256 propId, address newOwner) public returns (bool) {
        require(
            details[propId].CurrentOwner_account == msg.sender,
            "You are not the owner"
        );
        require(details[propId].CurrentOwner_account != newOwner);
        details[propId].Prev_Owner_accounts.push(
            details[propId].CurrentOwner_account
        );
        details[propId].CurrentOwner_account = newOwner;
        return true;
    }

    function propertyDetail(uint256 propId)
        public
        view
        returns (
            string memory propAddress,
            address currentAddress,
            address[] memory Pre_owners
        )
    {
        return (
            details[propId].PropertyAddress,
            details[propId].CurrentOwner_account,
            details[propId].Prev_Owner_accounts
        );
    }
}
