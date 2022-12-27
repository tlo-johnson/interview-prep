/*
You are given a string s and an array of strings words. All the strings of words are of the same length.

A concatenated substring in s is a substring that contains all the strings of any permutation of words concatenated.

For example, if words = ["ab","cd","ef"], then "abcdef", "abefcd", "cdabef", "cdefab", "efabcd", and "efcdab" are all concatenated strings. "acdbef" is not a concatenated substring because it is not the concatenation of any permutation of words.
Return the starting indices of all the concatenated substrings in s. You can return the answer in any order.
*/

import { equals } from './utils/array.js';

const findSubstring = (str, words) => {
  const indexes = new Set();

  for (let word of words) {
    let index = str.indexOf(word);
    while (index !== -1) {
      if (isSubstring(str, index, words)) {
        indexes.add(index);
      }

      index++;
      const newIndex = str.substring(index).indexOf(word);
      index = (newIndex === -1) ? -1 : index + newIndex;
    }
  }

  return Array.from(indexes);
}

const isSubstring = (str, index, words) => {
  const permutationLength = words[0].length * words.length;
  let potential = str.substring(index, index + permutationLength);
  for (let word of words) {
    if (index === 1) console.log(potential, word, words);
    if (!potential.includes(word)) {
      if (index === 1) console.log('did not find a match');
      return false;
    }
    const newIndex = potential.indexOf(word);
    potential = potential.substring(0, newIndex) + potential.substring(newIndex + word.length);
  }
  console.log('found an index');
  return true;
}

let str, words, expected, actual;

// str = "abcdef.abefcd.cdabef.cdefab.efabcd.efcdab.efcdab.abefcd";
// words = ["ab", "cd", "ef"];
// expected = [0, 7, 14, 21, 28, 35, 42, 49];
// actual = findSubstring(str, words);
// console.assert(equals(expected, actual), '%o', { str, words, expected, actual });
//
// str = "aaa";
// words = ["a", "a"];
// expected = [0, 1];
// actual = findSubstring(str, words);
// console.assert(equals(expected, actual), '%o', { str, words, expected, actual });
//
// str = "pjzkrkevzztxductzzxmxsvwjkxpvukmfjywwetvfnujhweiybwvvsrfequzkhossmootkmyxgjgfordrpapjuunmqnxxdrqrfgkrsjqbszgiqlcfnrpjlcwdrvbumtotzylshdvccdmsqoadfrpsvnwpizlwszrtyclhgilklydbmfhuywotjmktnwrfvizvnmfvvqfiokkdprznnnjycttprkxpuykhmpchiksyucbmtabiqkisgbhxngmhezrrqvayfsxauampdpxtafniiwfvdufhtwajrbkxtjzqjnfocdhekumttuqwovfjrgulhekcpjszyynadxhnttgmnxkduqmmyhzfnjhducesctufqbumxbamalqudeibljgbspeotkgvddcwgxidaiqcvgwykhbysjzlzfbupkqunuqtraxrlptivshhbihtsigtpipguhbhctcvubnhqipncyxfjebdnjyetnlnvmuxhzsdahkrscewabejifmxombiamxvauuitoltyymsarqcuuoezcbqpdaprxmsrickwpgwpsoplhugbikbkotzrtqkscekkgwjycfnvwfgdzogjzjvpcvixnsqsxacfwndzvrwrycwxrcismdhqapoojegggkocyrdtkzmiekhxoppctytvphjynrhtcvxcobxbcjjivtfjiwmduhzjokkbctweqtigwfhzorjlkpuuliaipbtfldinyetoybvugevwvhhhweejogrghllsouipabfafcxnhukcbtmxzshoyyufjhzadhrelweszbfgwpkzlwxkogyogutscvuhcllphshivnoteztpxsaoaacgxyaztuixhunrowzljqfqrahosheukhahhbiaxqzfmmwcjxountkevsvpbzjnilwpoermxrtlfroqoclexxisrdhvfsindffslyekrzwzqkpeocilatftymodgztjgybtyheqgcpwogdcjlnlesefgvimwbxcbzvaibspdjnrpqtyeilkcspknyylbwndvkffmzuriilxagyerjptbgeqgebiaqnvdubrtxibhvakcyotkfonmseszhczapxdlauexehhaireihxsplgdgmxfvaevrbadbwjbdrkfbbjjkgcztkcbwagtcnrtqryuqixtzhaakjlurnumzyovawrcjiwabuwretmdamfkxrgqgcdgbrdbnugzecbgyxxdqmisaqcyjkqrntxqmdrczxbebemcblftxplafnyoxqimkhcykwamvdsxjezkpgdpvopddptdfbprjustquhlazkjfluxrzopqdstulybnqvyknrchbphcarknnhhovweaqawdyxsqsqahkepluypwrzjegqtdoxfgzdkydeoxvrfhxusrujnmjzqrrlxglcmkiykldbiasnhrjbjekystzilrwkzhontwmehrfsrzfaqrbbxncphbzuuxeteshyrveamjsfiaharkcqxefghgceeixkdgkuboupxnwhnfigpkwnqdvzlydpidcljmflbccarbiegsmweklwngvygbqpescpeichmfidgsjmkvkofvkuehsmkkbocgejoiqcnafvuokelwuqsgkyoekaroptuvekfvmtxtqshcwsztkrzwrpabqrrhnlerxjojemcxel";
// words = ["dhvf","sind","ffsl","yekr","zwzq","kpeo","cila","tfty","modg","ztjg","ybty","heqg","cpwo","gdcj","lnle","sefg","vimw","bxcb"];
// expected = [935];
// actual = findSubstring(str, words);
// console.assert(equals(expected, actual), '%o', { str, words, expected, actual });
//
// str = "wordgoodgoodgoodbestword";
// words = ["word","good","best","word"]
// expected = [];
// actual = findSubstring(str, words);
// console.assert(equals(expected, actual), '%o', { str, words, expected, actual });

str = "ababaab";
words = ["ab","ba","ba"];
expected = [1];
actual = findSubstring(str, words);
console.assert(equals(expected, actual), '%o', { str, words, expected, actual });
