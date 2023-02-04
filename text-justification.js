// https://leetcode.com/problems/text-justification/

const fullJustify = (words, maxWidth) => {
  const lines = packWords(words, maxWidth);
  return distributeSpace(lines, maxWidth);
}

const packWords = (words, maxWidth) => {
  const [ firstWord, ...restWords ] = words;
  const lines = [];
  let line = [firstWord], count = firstWord.length;

  for (let word of restWords) {
    const spaceNeeded = count + word.length + 1;
    if (spaceNeeded > maxWidth) {
      lines.push(line);
      line = [word];
      count = word.length;
      continue;
    }

    line.push(word);
    count = spaceNeeded;
  }

  if (line.length)
    lines.push(line);

  return lines;
}

const distributeSpace = (lines, maxWidth) => {
  const distributed = [];

  for (let index = 0; index < lines.length - 1; index++) {
    const line = lines[index];
    const characterCount = line.join('').length;
    const numWords = line.length;
    const extraSpaces = maxWidth - characterCount;
    const numSpaces = numWords === 1 ? extraSpaces : Math.floor(extraSpaces / (numWords - 1));
    let leftoverSpaces = numWords === 1 ? 0 : extraSpaces % (numWords - 1);

    let justifiedLine = '';
    for (let count = 0; count < line.length; count++) {
      justifiedLine += line[count];
      for (let spaceCount = 0; spaceCount < numSpaces; spaceCount++)
        justifiedLine += ' ';
      if (leftoverSpaces-- > 0)
        justifiedLine += ' ';
    }

    distributed.push(justifiedLine.slice(0, maxWidth));
  }

  const lastLine = lines[lines.length - 1];
  distributed.push(lastLine.join(' ').padEnd(maxWidth));

  return distributed;
}
