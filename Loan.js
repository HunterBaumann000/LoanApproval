$(document).ready(function() {

    var myRules =
        {
            salary:
                {
                    required: true,

                    min:1,
                    max:10000000000000,
                    digits:true
                },
            months:
                {
                    required: true,

                    min:0,
                    max:25600,
                    digits:true
                },
            score:
                {
                    required: true,

                    min:300,
                    max:850,
                    digits:true
                }

        };

    // Object containing the error messages
    var myMessages =
        {
            salary:
                {
                    required: "Your Salary is Required",

                    min: "Too Little of a Salary",
                    max: "You Probably dont need a Loan",
                    digits:"Invalid Number"
                },
            years:
                {
                    required: "Your Job History is Required",

                    min: "Too Little of Years",
                    max: "Be Reasonable Here..",
                    digits:"Invalid Number"
                },
            score:
                {
                    required: "Your Credit Score is Required",

                    min: "Under Minimum FICO Credit Score",
                    max: "Over Maximum FICO Credit Score",
                    digits:"Invalid Number"
                }
        };

    $("Form").validate(
        {
            submitHandler:runMyProgram,
            rules: myRules,
            messages: myMessages,
        }
    );

    function runMyProgram() {

        $("form").submit(runMyProgram)

        //inputs
        var Salary = $('#salaryForm').val();
        Salary = parseFloat(Salary);

        var creditScore = $('#creditScoreForm').val();
        creditScore = parseFloat(creditScore);

        var jobMonths = $('#jobMonthForm').val();
        jobMonths = parseFloat(jobMonths);

        //Output and Process
        if(Salary >= 40000) {
            if (creditScore >= 600) {
                $("#finalAnswer").text("Loan approved");
            } else {
                if (jobMonths > 12) {
                    $("#finalAnswer").text("Loan approved");
                } else {
                    $("#finalAnswer").text("Loan denied");
                }
            }
        } else { //if below 40,000
            if (creditScore >= 600) {
                if (jobMonths > 12) {
                    $("#finalAnswer").text("Loan approved");
                } else {
                    $("#finalAnswer").text("Loan denied");
                }
            } else {
                $("#finalAnswer").text("Loan denied");
            }
        }
    }
});