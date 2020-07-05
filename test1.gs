isq :[[Int]]->Bool

isq.(l)=f3.(f2.l).(f1.l)

f2.l=l
f1.(x::xs)=length.(x::xs)
f3.[].n=True
f3.(x::xs).n|n/=length.x= False
	|otherwise=f3.xs.n


usefil :[[Int]]->[[Int]]->[[Int]]
usefil.(x::xs).[]=[]
usefil.(x::xs).(y::ys)|head.(head.xs)==head.y=map.(x++).(y::ys) 
		|otherwise=usefil.(x::xs).ys

usefil1.[].(y::ys)=[]
usefil1.(x::xs).(y::ys)|(length.(x::xs)>1)=usefil.(x::xs).(y::ys)++usefil1.xs.(y::ys)
		   |otherwise=[]

--tryit :[[Int]]->[[Int]]->[[Int]]
--tryit.(x::xs).(y::ys)|head.x==head.y=ys
	   

