for(var i = 0; i<10; i++){
    console.log((i+1) + 'sajeeb')
}

for (var i = 0; i<1000; i+=100){
    console.log((i) + 'xyz')
}

for (var i = 0; i<100; i++){
    if(i % 2 ==0){
        console.log(i)
    }
}

for (var i = 0; i<1000; i+=100){
    console.log((i+1) + 'xyz')
}

var sum = 0
for (var i = 0; i<10; i++){
    console.log(sum + ' + ' + i + ' = ' + (sum+i))
    sum += i
}
console.log('result = ' + sum)

var sum = 0
for (var i = 1; i<20; i++){
    if(i % 2 == 0){
        console.log(sum + ' + ' + i + ' = ' + (sum+i))
        sum += i
    }
}
console.log('result =' + sum)

var sum = 0
for (var i = 0; i <30; i++){
    if(i % 2 == 1){
        console.log(sum + ' + ' + i + ' = ' + (sum+i))
        sum += i
    }
}
console.log('result =' + sum)