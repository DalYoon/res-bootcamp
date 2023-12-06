let hello = "Hello"
let res = "ReScript"
let concat = (a, b) => a ++ b
let greeting = () => {
  hello->concat(" ")->concat(res)->Js.log
}

greeting()
