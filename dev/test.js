const Blockchain = require("./blockchain");

const bitcoin = new Blockchain();

const bc1 = {
  chain: [
    {
      index: 1,
      timestamp: 1548937235514,
      transactions: [],
      nonce: 100,
      hash: "0",
      previousBlockHash: "0"
    },
    {
      index: 2,
      timestamp: 1548937264364,
      transactions: [],
      nonce: 18140,
      hash: "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
      previousBlockHash: "0"
    },
    {
      index: 3,
      timestamp: 1548937341970,
      transactions: [
        {
          amount: 12.5,
          sender: "00",
          recipient: "9c86d9a0255211e9acc2fdfa8ff961f5",
          transactionId: "adbe32e0255211e9acc2fdfa8ff961f5"
        },
        {
          amount: 10,
          sender: "1111dfhklshflshflhflshflsdf",
          recipient: "1111dfhklshfsgsdgsdgsdgsdggsf",
          transactionId: "c2aa56c0255211e9acc2fdfa8ff961f5"
        },
        {
          amount: 20,
          sender: "2222dfhklshflshflhflshflsdf",
          recipient: "2222dfhklshfsgsdgsdgsdgsdggsf",
          transactionId: "c7e15490255211e9acc2fdfa8ff961f5"
        },
        {
          amount: 30,
          sender: "3333dfhklshflshflhflshflsdf",
          recipient: "33333dfhklshfsgsdgsdgsdgsdggsf",
          transactionId: "ce1d3f40255211e9acc2fdfa8ff961f5"
        }
      ],
      nonce: 14582,
      hash: "000030269b2d8a16175a786381f3eb7f6bd10fa58f1502d8ddaa80939b833cb3",
      previousBlockHash:
        "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
    },
    {
      index: 4,
      timestamp: 1548937399344,
      transactions: [
        {
          amount: 12.5,
          sender: "00",
          recipient: "9c86d9a0255211e9acc2fdfa8ff961f5",
          transactionId: "dbfb5b60255211e9acc2fdfa8ff961f5"
        },
        {
          amount: 40,
          sender: "4444dfhklshflshflhflshflsdf",
          recipient: "4444dfhklshfsgsdgsdgsdgsdggsf",
          transactionId: "e9c09850255211e9acc2fdfa8ff961f5"
        },
        {
          amount: 50,
          sender: "5555fhklshflshflhflshflsdf",
          recipient: "55555dfhklshfsgsdgsdgsdgsdggsf",
          transactionId: "eeed0ed0255211e9acc2fdfa8ff961f5"
        },
        {
          amount: 60,
          sender: "66666fhklshflshflhflshflsdf",
          recipient: "6666dfhklshfsgsdgsdgsdgsdggsf",
          transactionId: "f6615270255211e9acc2fdfa8ff961f5"
        },
        {
          amount: 70,
          sender: "7777fhklshflshflhflshflsdf",
          recipient: "77777fhklshfsgsdgsdgsdgsdggsf",
          transactionId: "fb9012e0255211e9acc2fdfa8ff961f5"
        }
      ],
      nonce: 34174,
      hash: "0000e699ed6751f2a18c78fbcab246d05e7ecff16fc0506c7add82345cf19be1",
      previousBlockHash:
        "000030269b2d8a16175a786381f3eb7f6bd10fa58f1502d8ddaa80939b833cb3"
    },
    {
      index: 5,
      timestamp: 1548937413549,
      transactions: [
        {
          amount: 12.5,
          sender: "00",
          recipient: "9c86d9a0255211e9acc2fdfa8ff961f5",
          transactionId: "fe2def40255211e9acc2fdfa8ff961f5"
        }
      ],
      nonce: 220162,
      hash: "0000e94143ec811ff384848c9ffb15e93f5374f6ca191bf47f3c029a97267b8b",
      previousBlockHash:
        "0000e699ed6751f2a18c78fbcab246d05e7ecff16fc0506c7add82345cf19be1"
    },
    {
      index: 6,
      timestamp: 1548937414852,
      transactions: [
        {
          amount: 12.5,
          sender: "00",
          recipient: "9c86d9a0255211e9acc2fdfa8ff961f5",
          transactionId: "06a59920255311e9acc2fdfa8ff961f5"
        }
      ],
      nonce: 178321,
      hash: "00002bd0b3356ca11a9c86ec9d962a41d33016cc87255757b015f3c30157a656",
      previousBlockHash:
        "0000e94143ec811ff384848c9ffb15e93f5374f6ca191bf47f3c029a97267b8b"
    },
    {
      index: 7,
      timestamp: 1548937416579,
      transactions: [
        {
          amount: 12.5,
          sender: "00",
          recipient: "9c86d9a0255211e9acc2fdfa8ff961f5",
          transactionId: "076c4480255311e9acc2fdfa8ff961f5"
        }
      ],
      nonce: 73885,
      hash: "00004086e4c3fba0512def42b208019de837cd1696bb402b3baeb62b4ea1ded0",
      previousBlockHash:
        "00002bd0b3356ca11a9c86ec9d962a41d33016cc87255757b015f3c30157a656"
    }
  ],
  pendingTransactions: [
    {
      amount: 12.5,
      sender: "00",
      recipient: "9c86d9a0255211e9acc2fdfa8ff961f5",
      transactionId: "0873c970255311e9acc2fdfa8ff961f5"
    }
  ],
  currentNodeUrl: "http://localhost:3006",
  networkNodes: []
};

console.log(bitcoin.chainIsValid(bc1.chain));
