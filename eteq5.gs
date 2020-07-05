f11.[].n.p=[]
f11.(l::ls).(n::ns).p=addlast.(map.(l++).(filter.(/=l).(n::ns))).p::(f11.ls.(n::ns).(p+1))
addlast.(x::xs).k=snd.(splitAt.k.(x::xs))++fst.(splitAt.k.(x::xs))
f12.n=transpose.(f11.(map.(::[]).[1...n]).(map.(::[]).[1...n]).0)

