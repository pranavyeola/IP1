accept :[Int]->[Int]->[Int]
accept.[].(y::ys)=[0]
accept.(x::xs).(y::ys)|length.(x::xs)<lengthexz.(y::ys)=(x::xs)
		|length.(x::xs)==lengthexz.(y::ys) && abs.(x)<y =(x::xs)
		|abs.(x)<y=(y::ys)
		|otherwise=accept.(remleadingz.(sub.(x::xs).(map.((x/y)*).(y::ys)))).(y::ys)

sub.(x::xs).(y::ys)=zipWith.(-).(x::xs).(addz.(y::ys).(length.(x::xs)))

addz :[Int]->Int->[Int]
addz.(x::xs).n|length.(x::xs)<n=addz.((x::xs)++[0]).n
	 |otherwise=(x::xs)
lengthexz.[]=0
lengthexz.(x::xs)|x==0=lengthexz.(xs)
		|otherwise=length.(x::xs)
remleadingz.[]=[]
remleadingz.(x::xs)|x==0=remleadingz.(xs)
		|otherwise=(x::xs)

--mod1.(b,a)|a<=b = b-(b/a)*a
--	|otherwise=b
--gcd1.(a,b)|mod1.(b,c) && mod1.(a,c)|c<-[(a-1)...1]

maxi.(x::[])=x
maxi.(x::xs)|x<head.xs=maxi.xs
	|x>head.xs=maxi.(x::tail.xs)

