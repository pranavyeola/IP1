--h :Int->[]
--trp: ([[Int]],Int)->[[Int]]
--row_to_col: ([[Int]],[[Int]])->[[Int]]
---trp.([],dim)=h.(dim)
---trp.(x::xs,dim)=row_to_col.(x,(trp.(xs,dim))
--h.(0)=[]
--h.(n)=[]::(h.(n-1))
--row_to_col.([],m)=m
--row_to_col.(l::ls).(m::ms)=(l::m)::row_to_col.(ls,ms)

--f:([[Int]])_[[Int]]
--f.(xs)=trp.(xs)++[map.head.xs]

------------------TRANSPOSE---------------------------------
trp :[[Int]]->[[Int]]
trp.([]::l)=[]
trp.(l)=map.head.l::trp.(map.tail.l)
------------------------------------------------------------



------------------MATRIX MULTIPLICATION----------------------
matmultt :([[Int]],[[Int]])->[Int]
matmultt.((x::xs),[])=[]
matmultt.((x::xs),(y::ys))= ((prod.x.y)::(matmultt.((x::xs),ys)))

matmulti :([[Int]],[[Int]])->[[Int]]
matmulti.([],(y::ys))=[]
matmulti.((x::xs),(y::ys))=(matmultt.((x::xs),(y::ys))::matmulti.(xs,(y::ys)))
 
matmulti2 :([[Int]],[[Int]])->[[Int]]
matmulti2.((x::xs),(y::ys))=matmulti.((x::xs),trp.(y::ys))

prod :[Int]->[Int]->Int
prod.[].[]=0
prod.(x::xs).(y::ys)=x*y+prod.xs.ys
------------------------------------------------------------

-------------MATRIX POWER----------------------
matrixpow :[[Int]]->[[Int]]->Int->[[Int]]
matrixpow.l.m.n| n==1= l
	|otherwise = matrixpow.(matmulti2.(l,m)).m.(n-1)
matrixpow1.l.n=matrixpow.l.l.n
-----------------------------------------------
--sum.(x::xs)=x+sum.xs



--main :[Int]->Int->[[[Int]]]
--main.(l::ls).k|(length.(l::ls)<k)=[]
--	 |oth

matadd :([[Int]],[[Int]])->[[Int]]


matadd.([],[])=[]
matadd.((x::xs),(y::ys))=(zipWith.(+).x.y::matadd.(xs,ys))






