package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
	"time"
)

func main() {
	salutations := map[string]string{
		"morning":   "Good morning",
		"afternoon": "Good afternoon",
		"evening":   "Good evening",
	}

	scanner := bufio.NewScanner(os.Stdin)
	for {
		fmt.Print("Choose morning, afternoon, or evening: ")
		if !scanner.Scan() {
			return
		}

		period := strings.ToLower(strings.TrimSpace(scanner.Text()))
		salutation, ok := salutations[period]
		if !ok {
			fmt.Println("Please enter morning, afternoon, or evening.")
			continue
		}

		now := time.Now()
		fmt.Printf("%s! Current time: %s | Date: %s\n",
			salutation,
			now.Format("03:04:05 PM"),
			now.Format("January 02, 2006"),
		)
		return
	}
}