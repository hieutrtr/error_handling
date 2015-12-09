var cause = function (req, goto)
{
  goto(new Error("Error need to handle"));
};

cause("result", function(err,res){
  if(err)
    console.log(err);
});
