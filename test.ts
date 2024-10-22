let content = `Now, I've gone ahead and added "The Grand Budapest Hotel" to our movie queue, because, let's be honest, who wouldn't want to see this? <add>The Grand Budapest Hotel</add> auwdaiuwdiuawdiuawiudadw awduiawd <remove>The Other Movie</remove> auiwdiabwd <add>Tuiseria</add>`;

let sequence: (string | { action: string; title: string })[] = [];
let index = 0;
for (const match of [
    ...content.matchAll(/<(add)>(.+?)<\/add>|<(remove)>(.+?)<\/remove>/g),
]) {
    console.log(match);
    const span = match[0],
        action = match[1] ?? match[3],
        title = match[2] ?? match[4];

    const text = content.slice(index, match.index);
    index = match.index + span.length;

    sequence.push(text.trim());
    sequence.push({
        action,
        title,
    });
}
if (sequence.length == 0) sequence.push(content);

console.log(sequence);
