# Creating a Sinle Linked List

# Creating a Node

class Node:
    def __init__(self,data):
        self.data= data
        self.next=None 
class Sll:
    def __init__(self):
        self.head=None
    # Traversing a Linked List
    def traversal(self):
        a=self.head
        if(a is None):
            print("Linked List is Empty")
        else:
            while(a is not None):
                print(a.data,end=" ")
                a=a.next
sll=Sll()
n1=Node(10)
n2=Node(20)
n3=Node(30)
n4=Node(40)
n5=Node(50)
sll.head=n1
n1.next=n2
n2.next=n3
n3.next=n4  
n4.next=n5
sll.traversal()