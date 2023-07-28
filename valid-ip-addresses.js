// https://www.algoexpert.io/questions/valid-ip-addresses
// time: O(1) since there is a finite amount of ip addresses, the max time we can spend iterating through addresses is constant (or something like that)
// space: O(1)

function validIPAddresses(string) {
  const arr = string.split('');
  const addresses = [];
  findAddresses(arr, addresses);

  return addresses.map(address => address.join('.'));
}

const findAddresses = (arr, addresses, address = []) => {
  if (address.length && !isValid(address)) return;
  if (address.length === 4 && !arr.length) {
    addresses.push(address);
    return;
  }

  let count = 0, next = [];
  while (arr.length && count < 3) {
    next.push(arr.shift());
    findAddresses([...arr], addresses, [...address, next.join('')]);
  }
}

const isValid = address => {
  const part = address[address.length - 1];
  const num = Number(part);
  return num >= 0 && num <= 255 && num.toString() === part && address.length <= 4;
}

// Do not edit the line below.
exports.validIPAddresses = validIPAddresses;
