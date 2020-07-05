-----------------binary sequence of length k generation---------------------
g:[[Char]]->Int->[[Char]]
g.(x::xs).1=f.(x::xs).1
g.(x::xs).n=g.(f.(x::xs).n).(n-1)

f:[[Char]]->Int->[[Char]]
f.[].n=[]
f.(x::xs).n=('0'::x)::('1'::x)::f.xs.n
g1 :Int->[Char]->[[Char]]
g1.n.(l::ls)|n==1=select.([['0'],['1']]).(l::ls)
	 |otherwise=select.(g.[['0'],['1']].(n-1)).(l::ls)
----------------------------------------------------------------------------

-------------------Pattern checking-----------------------------------------
select.[].p=[]
select.(x::xs).p|checkp.x.p==False=(x::select.xs.p)
		|otherwise=select.xs.p

checkp.(x::xs).p|length.(x::xs)<length.p=True
		|length.(x::xs)==length.p=check.(x::xs).p
		|check.(x::xs).p==False=checkp.xs.p
		|otherwise=True
check.[].[]=True
check.xs.[]=True
check.(x::xs).(p::ps)|x==p=check.xs.ps
	        |otherwise=False
------------------------------------------------------------------------

search1:[Char]->Char
search1.[]='0'
search1.(x::xs)=x

------------transpose of matrix------------
trp.([]::l)=[]
trp.(l)=map.head.l::(trp.(map.tail.l))
---------------------------------------------
-----------------subset code1------------------------
combi.l.m.1=m
combi.(l::ls).(m::ms).k=combi.(l::ls).(f11.(l::ls).(m::ms)).(k-1)
f11.l.[]=[]
f11.(l::ls).(m::ms)|(head.(head.ls)==head.m)=map.(l++).(m::ms)++f11.ls.(ms)
		|otherwise=f11.(l::ls).ms
subsets.(x::xs).n=combi.(map.(::[]).(x::xs)).(map.(::[]).(x::xs)).n
--------------------------------------


combinefst :(Int,Int)->[Int]
combinefst.(y,x)=y::x::[]

f1 :(Int,[Int])->[[Int]]
f1.(y,[])=[]
f1.(y,x::xs)|(x::xs)/=[]=combinefst.(y,x)::f1.(y,xs)


--g1.(x::xs)=f1.(x,xs)
--h1.[]=[]
--h1.(x::xs)=g1.(x::xs)++h1.(xs)


		





-----------------------subset construction when list and k is given code2 -----------------------
subset :[[Int]]->[[Int]]->[[Int]]
subset.(x::xs).[]=[]
subset.(x::xs).(y::ys)|head.(head.xs)==head.y=map.(x++).(y::ys) 
		|otherwise=subset.(x::xs).ys

subset1.[].(y::ys)=[]
subset1.(x::xs).(y::ys)|(length.(x::xs)>1)=subset.(x::xs).(y::ys)++subset1.xs.(y::ys)
		   |otherwise=[]
subsetk.(x::xs).(y::ys).k.count|k==1=(x::xs)
			   |count<(k-2)=subsetk.(x::xs).(subset1.(x::xs).(y::ys)).k.(count+1)
                             |otherwise=subset1.(x::xs).(y::ys)
sub1.[]=[]
sub1.(x::xs)=((x::[])::sub1.xs)
sub3.(x::xs).k=combi.(sub1.(x::xs)).(sub1.(x::xs)).k
-------------------------------------------------------------------------------------------


repl.(x::xs).pos=repl1.(splitAt.(pos).(x::xs))
repl1.(x)=(fst.x)++(9::tail.(snd.x))

