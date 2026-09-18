* Week 1 Stata Training

* Checking the current directory of your stata
pwd

* To change the current directory to the directory of your choice
* Run this script from your chosen working directory.
* Example: cd "path/to/your/training-folder"

* Starting a log to track everything you do within the stata window 
capture log close
log using "week1_training.smcl", replace

/* The log is very important and it is what helps to track everything you
do within stata. It helps to show all your executed commands including the 
result output and it is one of the files you will always share with those who
wants to see what you have done within stata */

/* The next important thing you must always do is to ensure you document
all your commands within a do file like I am doing. This will help others to 
be able to follow the same steps you did to get the same results you got. 
Furthermore, it helps for easy automation and verification of all you did. */

/* Stata has about five major windows which are: The result, the command, 
the review, the variable, and the property window. The result window is where 
all your executed commands and the outputs are displayed. The command window
is where you are able to write the commands you want to execute within Stata.
The review window is where you get to see all the commands you've ran and you 
are able to recall some of the commands instead of typing them all over. The 
variable window is where you get to see all the list of the variables of the 
current dataset you've loaded in STATA and lastly the property window is where
you get to see the properties of each of the variable of your dataset */

/* Also, note that stata has both the command syntax and the menu navigation. 
The command syntax which is often preferred and the most recommended allows you
to instruct stata on all that you intend to do using a STATA command. The menu
navigation on the other hand is the point and click process within STATA. This 
approach although will execute all possible tasks you want to do within stata, 
however, the steps are not documented in your dofile and hence you will not 
be able to automate the process and others might not be able to redo all that 
you did. The recommendation is to stick with the STATA command way instead. */

/* Stata is a very powerful statistical analysis tools that can do basic to
complex analysis. It is very efficient, user friendly and can do almost all
kinds of analysis. */

/* Basic Stata file formats are .dta for stata files, .do for stata dofile, and
.smcl, .log, or .txt for stata log file. */

/* Accessing Stata inbuilt dataset for personal practice. STATA has enough data
to practice with. To acess stata inbuilt datasets you can run the command */
help dta_examples

/* For week1 and 2, we shall be accessing and using the Stata auto data. */
sysuse auto, clear

* Data Investigation
/* It is always very important to investigate your data before commencing with
any form of analysis. Investigating your data helps you to understand the data,
it's structure and the variable types. The commands: browse, describe, list,
codebook, and summarize can often help you to get better understanding of your
data before diving into the main analysis */

browse /* This helps you to be able to view your entire dataset */
describe /* This allows you to understand the structure of your dataset */
codebook price /* This allows you to get more deeper insight into the structure of 
your dataset and also get to see some other basic statistics such as the
percentile. It is always advice to use codebook on a particular variable that
requires more deeper understanding rather than on all the variables. NB. If you
execute the codebook command without specifying any variable, then it will
execute for all the variables in your dataset. So it is best to say codebook 
your variable name eg. codebook price. */

list in 1/3 /* This code helps you to view the first three row of your data
in the result window rather than going to the data window. It allows you to
understand the variable names and give you a quick insight into what your data 
is all about. */

/* NB: If you just use the list function without specifying the number of rows
to display, then it will display the entire dataset in the result window for
you. Also, you can decide to list one or more variable of your choice just to 
get further understanding of what the variable contains. e.g */

list make price in 1/3

summarize /* This code helps you to give you a simple statistical summary of 
all your dataset. */

/* You can also compute a summary of just one or more specific variables */
summarize rep78 price

/* You can also decide that you want to carry out some basic tabulation of the 
data especially if your data contains categorical variables */
tabulate rep78 foreign

/* tabulate varname or tab varname → Used for one-way frequency tables of 
categorical variables

tabulate var1 var2 or tab var1 var2 → Used for two-way cross-tabulations
of categorical variables.

We can not use tabulate for continous variables due to the following;
Continuous variables (e.g., age, income, weight) typically have too many 
unique values to meaningfully tabulate and If used, tabulate would just list 
every unique value, which defeats the purpose of summarizing data.  

Therefore, for continous variables, it is best to use summarize to get the mean,
min, max, std dev etc. */

/* Lastly, it is always best to save your stata data into your local drive and 
to do that you will need to write the code */
save "Week1_stata_data.dta", replace

/* Finally, you must not forget to close your log, so the continous tracking 
of your work can be stopped. */
log close

* End of Week 1 Class







