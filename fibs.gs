

-----------search----------------------------------
ispresent :Int->[Int]->Bool
ispresent.e.[]=False
ispresent.e.(x::xs)|(e==x) =True
		|otherwise=ispresent.e.xs

---------------------------------------------------

-----------------------------------matrix multiplication------------------------------------

------------------transpose of matrix-----------------
trp :[[Int]]->[[Int]]
col_to_row :[[Int]]->[Int]
rest :[[Int]]->[[Int]]

trp.([]::xs)=[]
trp.(l)=col_to_row.(l)::trp.(rest.(l))
rest.([])=[]
rest.(x::xs)=tail.(x)::rest.(xs)
--taill.(x::xs)=xs
col_to_row.([])=[]
col_to_row.(x::xs)=head.(x)::col_to_row.(xs)
--------------------------------------------------------

prod :[Int]->[Int]->Int
prod.[].[]=0
prod.(x::xs).(y::ys)=x*y+prod.(xs).(ys)

matrixmul :[[Int]]->[[Int]]->[[Int]]
prod.x.[]=[]
matrixmul.[].x=[]
matrixmul.(x::xs).(trp.(y::ys))=(prod.x.y)::prod.(x.((head.ys)::(tail.ys)))::matrixmul.(xs.(y::ys))
-------------------------------------------------------------------------------

----------------------add element to the last of list----------------------------
addlast1 :([char],[char])->[char]
addlast1.(l,a)=l++a
addlast.(l,e)=addlast1.(l,[e])
---------------------------------------------------------------------------------





---------------------access element in 2D matrix------------------- 

-----------access element in 1D list---------------------
access1 :[Int]->Int->Int->Int
access1.(x::xs).pos.count|count==(pos-1)=x
		|otherwise=access1.(xs).pos.(count+1)
access.l.pos=access1.l.pos.(0)
---------------access particular row in 2D list----------
accessrow1 :[[Int]]->Int->Int->[Int]
accessrow1.(x::xs).pos.count|count==(pos-1)=x
		|otherwise=accessrow1.(xs).pos.(count+1)
accessrow.l.pos=accessrow1.l.pos.(0)
----------------------------------------------------
accessele :[[Int]]->Int->Int->Int
accessele.l.m.n=access.(accessrow.l.m).n

------------------------------------------------------------------











