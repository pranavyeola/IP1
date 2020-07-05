--------------Product of All elements in list---------------------------
prod.[]=1
prod.(x::xs)=x * prod.(xs)
-------------------------------------------------------------------------
-------------------factorial------------------------------------------------
fact.0=1
fact.n=n*fact.(n-1)
--------------------------------------------------------------------

--------------------maximum element in list----------------------
maxof :(Int,[Int])->Int
maxof.(e,[])=e
maxof.(e,(x::xs))|e<x=maxof.(x,(xs))
		|otherwise=maxof.(e,(xs))
max1.(x::xs)=maxof.(x,xs)
--------------------------------------------------------------


split :([char],Int,[char])->[char]
split.((x::xs),n,l)|(length.(l)==n)=l
		   |n==length.(x::xs)=x::xs
		|otherwise=split.((xs),n,(x::l))

------------------------check if path exist between two vertices--------------------
path1 :([(Int,Int)],(Int,Int))->Bool
path1.([],m)=False
path1.((x::xs),m)|(fst.m==fst.x && snd.m==snd.x) || (fst.m==snd.x && snd.m==fst.x)=True
		|otherwise=path1.(xs,m)

path2 :([(Int,Int)],(Int,Int))->Bool
path2.([],m)=False
path2.((x::xs),m)|path1.((x::xs),m)==True=True
	|fst.m==fst.x && snd.m/=snd.x =path2.(xs,(snd.x,snd.m))
	|fst.m==snd.x && snd.m/=fst.x =path2.(xs,(fst.x,snd.m))
	|snd.m==fst.x && fst.m/=snd.x =path2.(xs,(snd.x,fst.m))
	|snd.m==snd.x && fst.m/=fst.x =path2.(xs,(fst.x,fst.m))
        |otherwise=path2.(xs,m) 	    



path :([(Int,Int)],(Int,Int))->Bool
path.([],m)=False
path.((x::xs),m)|path1.((x::xs),m)==True=True
	|path2.((reverse.(x::xs)),m)==True=True
	|fst.m==fst.x && snd.m/=snd.x =path.(x::xs,(snd.x,snd.m))
	|fst.m==snd.x && snd.m/=fst.x =path.(x::xs,(fst.x,snd.m))
	|snd.m==fst.x && fst.m/=snd.x =path.(x::xs,(snd.x,fst.m))
	|snd.m==snd.x && fst.m/=fst.x =path.(x::xs,(fst.x,fst.m))
        |otherwise=path.(x::xs,m) 
-------------------------------------------------------------------------------------
--------------------------quicksort---------------------------------------------------
quicksort :[Int]->[Int]
quicksort.[]=[]
quicksort.(x::xs)=quicksort.[y|y<-xs,y<=x]++[x]++quicksort.[y|y<-xs,y>x]    
-------------------------------------------------------------------------------------
------------access element with position-----------------------------------------------------------
access1 :[Int]->Int->Int->Int
access1.(x::xs).pos.count|count==(pos-1)=x
		|otherwise=access1.(xs).pos.(count+1)
access.l.pos=access1.l.pos.(0)
--------------------------------------------------------------------------------------------

accept :[Float]->[Float]->[[Float]]
accept.[].(y::ys)=[0.0]
accept.(z::zs).(x::xs).(y::ys)|length.(x::xs)<lengthexz.(y::ys)=((x::xs)::[])
		|length.(x::xs)==lengthexz.(y::ys) && abs.(x)<y =(x::xs)
		|otherwise=accept.(remleadingz.(sub.(x::xs).(map.((x/y)*).(y::ys)))).(y::ys)

sub.(x::xs).(y::ys)=zipWith.(-).(x::xs).(addz.(y::ys).(length.(x::xs)))

--addz :[Int]->Int->[Int]
addz.(x::xs).n|length.(x::xs)<n=addz.((x::xs)++[0.0]).n
	 |otherwise=(x::xs)
lengthexz.[]=0
lengthexz.(x::xs)|x==0.0=lengthexz.(xs)
		|otherwise=length.(x::xs)
remleadingz.[]=[]
remleadingz.(x::xs)|x==0.0=remleadingz.(xs)
		|otherwise=(x::xs)
accept1.(x::xs).(y::ys)=accept.(x::xs).(x::xs).(y::ys)





repl.(x::xs).pos=repl1.(splitAt.(3).[1,2,3,4,5,6,7])
repl1.(x)=(fst.x)++(9::snd.ys)


