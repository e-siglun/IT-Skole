var RandomNum = Math.random(0, 1)

if (0.1 > RandomNum) {
    alert("Dette er et lite tall")
} else if (RandomNum > 0.9) {
    alert("Dette er et stort tall")
} else if (RandomNum > 0.7) {
    alert("Dette tallet er større en 0.7")
} else if (RandomNum > 0.5) {
    alert("Dette tallet er større en 0.5")
} else if (RandomNum > 0.3) {
    alert("Dette tallet er større en 0.3")
}