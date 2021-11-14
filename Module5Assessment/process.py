# assign variable to open file in Python
log_file = open("um-server-01.txt")

# create function called sales_reports that takes in a parameter; in this case, log_file


def sales_reports(log_file):
    # creates a for loop to loop over the .txt file
    for line in log_file:
        # removes any white spaces from each line in the .txt file
        line = line.rstrip()
        # uses splice method beginning at the 0 index and ending at the 3 index and assigning it to the variable `day` for each line in the .txt file
        day = line[0:3]
        # if statement to test if the day variable is equal to "Tue"
        if day == "Tue":
            # if the condition is true, print each line from .txt file
            print(line)


# call the function passing in the .txt file from line 2
sales_reports(log_file)
