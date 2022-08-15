let str = `Старший братец ПОНЕДЕЛЬНИК –
работяга, не бездельник.
Он неделю открывает
всех трудиться зазывает.

ВТОРНИК следует за братом
у него идей богато.

А потом СРЕДА - сестрица,
не пристало ей лениться.

Брат ЧЕТВЕРГ и так, и сяк,
он мечтательный чудак.

ПЯТНИЦА - сестра сумела
побыстрей закончить дело.

Предпоследний брат СУББОТА
не выходит на работу.

В гости ходит ВОСКРЕСЕНЬЕ,
очень любит угощенье
`;


const dayweks = [
    ["ПОНЕДЕЛЬНИК", "MONDAY"],
    ["ВТОРНИК", "TUESDAY"],
    ["СРЕДА", "WEDNESDAY"],
    ["ЧЕТВЕРГ", "THURSDAY"],
    ["ПЯТНИЦА", "FRIDAY"],
    ["СУББОТА", "SATURDAY"],
    ["ВОСКРЕСЕНЬЕ", "SUNDAY"],
];

for(const day of dayweks) {
    str = str.replaceAll(day[0], day[1])
}

console.log(str)