--------------generate binary of length n better version-------------------------
genbinary.(l::ls).1=(l::ls)
genbinary.(l::ls).n=genbinary.(gen.(l::ls)).(n-1)

gen.[]=[]
gen.(l::ls)=('0'::l)::('1'::l)::gen.(ls)

gen1.n=genbinary.[['0'],['1']].n
----------------------------------------------------------------------------------

---------------------------generate binary of length n another version---------------------
bink.1=["0","1"]
bink.n=map.("0"++).(bink.(n-1)) ++ map.("1"++).(bink.(n-1))
-----------------------------------------------------------------------------------------

--------------------------------binary seq generator of length n-(version3)-----------------
comp :[Int]->Bool
comp.[]=False
comp.(x::[])=False
comp.(x::xs)|(((head.(x::xs))==1) && (head.(xs)==1) ==True)=True
	    |otherwise = comp.xs 

remainder :(Int,Int)->Int
remainder.(x,y)|x>=y = x-((x/y)*y)
	 |x<y=x

repeatdiv :Int->[Int]
repeatdiv.0=[0]
repeatdiv.1=[1]
repeatdiv.m=remainder.(m,2)::repeatdiv.(m/2)

binary :Int->[Int]
binary.n=reverse.(repeatdiv.n)

binary1 :([Int],Int)->[Int]
binary1.(l,n)|length.(l)==n=l
	   |otherwise=binary1.((0::l),n)


generate :([Int],Int)->[[Int]]
generate.([],n)=[]
generate.((x::xs),n)|comp.(binary1.(binary.(x),n))==False=(binary1.(binary.(x),n)::generate.(xs,n))
		|otherwise = generate.(xs,n)

l.n=generate.([0...2^n-1],n)
------------------------------------------------------------------------------------

