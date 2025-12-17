package main

import "fmt"

func add( a , b int ) int {
	return a + b
}

func swap( x , y  string) (string , string) {
	return y , x 
}

func split( sum int)(x, y int){
	x = sum * 4
	y = sum + 4
	return
}

var c , python , java bool

//my := 45

func main(){
    
	
	fmt.Println(add(2,3))
	a , b := swap("goutham" , "hi")
	fmt.Println(a,b)
	fmt.Println(split(5))

	var i int 
	fmt.Println( i , c , python , java )

	var k , m int = 1 ,2 
	fmt.Println(k , m)

	var q , w, e = 12 , false , "goutham!"
	fmt.Println(q,w,e)

	//fmt.Println(my)

	fmt.Printf("type %T of  i and value is %v " , i , i)

	for i:= 0 ; i < 5 ;i++ {
		fmt.Println(i)
	}


	sum := 1
	for ; sum < 10 ; {
		sum += sum

	}

	fmt.Println(sum)


	if 10 > 5 {
		fmt.Println("yes")
	}

	if x:= 5 ; x > 4 {
		fmt.Println("yes")
	}


	os:="windows"
	switch os {
	case "linux" :
		fmt.Println("linux")
	case "windows" :
		fmt.Println("windows correct")
	default :
	   fmt.Println("default")
	}


	for i := 0; i < 10; i++ {
		defer fmt.Println(i)
	}

	defer fmt.Println("goutham")
	defer fmt.Println("this is ")
	fmt.Println("hi")
}