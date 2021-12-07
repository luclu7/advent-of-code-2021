package main

import (
	"fmt"
	"io/ioutil"
	"strconv"
	"strings"
)

func sliceAtoi(sa []string) ([]int, error) {
	si := make([]int, 0, len(sa))
	for _, a := range sa {
		i, err := strconv.Atoi(a)
		if err != nil {
			return si, err
		}
		si = append(si, i)
	}
	return si, nil
}

func remove(s []int, i int) []int {
	s[i] = s[len(s)-1]
	return s[:len(s)-1]
}

func main() {
	input, err := ioutil.ReadFile("input.txt")
	if err != nil {
		panic(err)
	}

	strbuffer := string(input) // convert read in file to a string

	fishesString := strings.Split(strbuffer, ",")
	fishes, err := sliceAtoi(fishesString)
	if err != nil {
		panic(err)
	}
	//fmt.Println(fishes)

	for index := 0; index <= 85; index++ {
		for i, fish := range fishes {
			if fish > 0 {
				fishes[i] = fish - 1
			} else {
				fishes = append(fishes, 8)
				fishes[i] = 6
			}
		}
		//fmt.Println(fishes)
		fmt.Printf("%d,%d\n", index, len(fishes))
	}
}
