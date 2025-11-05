//
for (var i = 0; i < 3; i++) {
    (function(j) {
        setTimeout(function() {
            console.log('Cách 1:', j)
        }, 100)
    })(i)
}

// 
for (var i = 0; i < 3; i++) {
    setTimeout(function(j) {
        console.log('Cách 2:', j)
    }, 100, i)
}

// 
for (var i = 0; i < 3; i++) {
    setTimeout(function(j) {
        console.log('Cách 3:', j)
    }.bind(null, i), 100)
}