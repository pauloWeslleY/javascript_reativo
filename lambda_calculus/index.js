//TODO: LAMBDA_CALCULUS
Number.prototype.log = function () { console.log(+this) };
Function.prototype.log = function () { console.log(this.toString()) };

const I = a => a

I(3).log()
I(I).log()

const SELF = f => f(f)
SELF(I).log()

const FIRST = a => _ => a
FIRST(7)(11).log()

const LAST = _ => b => b
LAST(7)(11).log()

const CHANGE = f => a => b => f(b)(a)
CHANGE(LAST)(7)(11).log()
CHANGE(FIRST)(6)(12).log()

const LAST_TWO = a => b => CHANGE(FIRST)(a)(b)
LAST_TWO(13)(20).log()

//! TRUE or FALSE
//NOTE: TRUE ? <FIRST> : LAST
//NOTE: FALSE ? FIRST : <LAST>

const TRUE = FIRST
const FALSE = LAST

TRUE.toString = () => 'Verdadeiro (FIRST)'
FALSE.toString = () => 'Falso (LAST)'

TRUE.log()
FALSE.log()

//! NOT
const NOT = a => a(FALSE)(TRUE)
NOT(FALSE).log()

//! AND
const AND = a => b => a(b)(FALSE)
AND(TRUE)(TRUE).log()

//! OR
const OR = a => b => a(TRUE)(b)
OR(FALSE)(FALSE).toString()
console.log("== === === OR === === ==")

const EQ = a => b => a(b)(NOT(b))

EQ(TRUE)(TRUE).log()
EQ(TRUE)(FALSE).log()
EQ(FALSE)(TRUE).log()
EQ(FALSE)(FALSE).log()
console.log("== === === EQ === === ==")

const XOR = a => b => NOT(EQ(a)(b))

XOR(TRUE)(TRUE).log()
XOR(TRUE)(FALSE).log()
XOR(FALSE)(TRUE).log()
XOR(FALSE)(FALSE).log()