# CreativeAncestry
Blockchain Enabled Creative Ancestry for Distributed Collaboration

I developed this POC as part of my PhD in Blockchain.

This POC sought to create a distributed collaboration system where both inclusion and competition are high, as these conditions place most strain on creative ancestry. 
Thus, the distributed collaboration blockchain system was demonstrated as an ideation platform, in which individuals could put forward ideas and ‘up vote’ specific ideas put forward by others. 
Individual threads were created around different topics of ideation and users were free to make recommendations/vote in any thread they wished. 
Once a recommendation received five ‘up votes’, that idea was selected for shortlisting and the corresponding thread was closed. 
This concept has been suggested in previous research as an effect way of engaging collaborators to improve data quality by evaluating, and filtering the large volume of contributions in distributed collaboration.

This repository contains the source code behind the POC which I developed for the purposes of my research.
The .sol file contains the solidity smart contract which I created. 
This smart contract, which runs on the Ethereum network, allows users to make contributions and vote on other peoples contributions. All transactions to the smart contract will be immutably stored on the Ethereum Blockchain network.
The.js files in this repository communicate with the data stored in the smart contract. 
The .sol file must first be mined to the Ethereum network, this will initialize the smart contract under a unique contract address.
Each .js file will need to be edited to refer to the smart contract address which is created.
