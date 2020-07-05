--access1 :[Int]->Int->Int->Int
--access1.(x::xs).pos.count|count==(pos-1)=x
--		|otherwise=access1.(xs).pos.(count+1)
--access.l.pos=access1.l.pos.(0)

--accessrow1 :[[Int]]->Int->Int->[Int]
--accessrow1.(x::xs).pos.count|count==(pos-1)=x
--		|otherwise=accessrow1.(xs).pos.(count+1)
--accessrow.l.pos=accessrow1.l.pos.(0)

--accessele :[[Int]]->Int->Int->Int
--accessele.l.m.n=access.(accessrow.l.m).n

adjz2.0=[]
adjz2.n=0::adjz2.(n-1)

adjz1 :(Int,Int)->[[Int]]
adjz1.(0,n)=[]
adjz1.(x,n)=adjz2.n::adjz1.((x-1),n)

adjz.n=adjz1.(n,n)

graph1.(x::xs).(y::ys).(r)=graph.(adjz.(length.(x::xs))).(y::ys).(r)

graph :[[Int]]->[(Int,Int)]->(Int,Int)->[[Int]]
graph.(x::xs).[].(r)=(x::xs)
graph.(x::xs).(y::ys).(r)=graph.(repl2.(x::xs).((fst.y)-1).(snd.y)).(ys).(r)

repl2 :[[Int]]->Int->Int->[[Int]]
repl2.(l::ls).m.n=repl3.(splitAt.(m).(l::ls)).n
repl3.(x).n=(fst.x)++((repl.(head.(snd.x)).(n-1))::tail.(snd.x))

repl.(x::xs).pos=repl1.(splitAt.(pos).(x::xs))
repl1.(x)=(fst.x)++(1::tail.(snd.x))




