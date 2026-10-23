from datetime import datetime


salutations = {
    "morning": "Good morning",
    "afternoon": "Good afternoon",
    "evening": "Good evening",
}

while True:
    period = input("Choose morning, afternoon, or evening: ").strip().lower()
    if period in salutations:
        break
    print("Please enter morning, afternoon, or evening.")

now = datetime.now()
print(
    f"{salutations[period]}! Current time: {now.strftime('%I:%M:%S %p')} "
    f"| Date: {now.strftime('%B %d, %Y')}"
)