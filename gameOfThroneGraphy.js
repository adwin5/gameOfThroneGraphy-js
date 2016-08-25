//node constructor
function PlayerNode(name){
	this.name = name;
	this.acquaintanceList = [];
}
//method is stored in prototype not instance, and multiple instance can share one method to not waste memory
PlayerNode.prototype.addEdge = function(name){
	this.acquaintanceList.push(name);
}

//graphy constructor
function PlayerGraphy(){
	this.nodeList = []
}
//graphy method
//player name1 is acquianted with player name2 in a mutual way
PlayerGraphy.prototype.addPlayer = function(name1, name2){
  
  if(!checkExist(this.nodeList, name1))//name1 is not in the node List
  {
	  var tem1 = new PlayerNode(name1);
	  tem1.acquaintanceList.push(name2);
	  this.nodeList.push(tem1)
  }
  else//name1 is in the node List
  {
  	for(var i=0;i<this.nodeList.length;i++)
  	{
  		if(name1 === this.nodeList[i].name)
  		{
  			if(!checkExistAcq(this.nodeList[i].acquaintanceList, name2)){//if the name2 is not already inside the acquaintanceList
  				this.nodeList[i].addEdge(name2);
  			}
  			break;
  		}	
  	}
  }
  
  if(!checkExist(this.nodeList, name2))//name2 is not in the node List
  {
	  var tem2 = new PlayerNode(name2);
  	  tem2.acquaintanceList.push(name1);
	  this.nodeList.push(tem2)
  }
  else//name2 is in the node List
  {
  	for(var i=0;i<this.nodeList.length;i++)
  	{
  		if(name2 === this.nodeList[i].name)
  		{
  			if(!checkExistAcq(this.nodeList[i].acquaintanceList, name1)){//if the name1 is not already inside the acquaintanceList
  				this.nodeList[i].addEdge(name1);
  			}
  			break;
  		}	
  	}
  }
}
//check if the name is in the arrayList
function checkExist(array, target){
	for(var i=0;i<array.length;i++)
	{
		if(array[i].name === target)
			return true;
	}	
	return false
}
//check if the name is in the acquaintanceList
function checkExistAcq(array, target){
	for(var i=0;i<array.length;i++)
	{
		if(array[i] === target)
			return true;
	}	
	return false
}
//graphy method for print all players
PlayerGraphy.prototype.printPlayer = function(){
	for(var i=0;i<this.nodeList.length;i++)
	{
		console.log("***Character "+this.nodeList[i].name+ " is acquianted with: ");		
		for(var j=0;j<this.nodeList[i].acquaintanceList.length;j++)
		{
			console.log(this.nodeList[i].acquaintanceList[j])
		}	
	}
}

//create an instance of graphy
var gameOfThronePlayers = new PlayerGraphy();
//call graphy method and this means "Jon" and "Sansa" knonws each other
gameOfThronePlayers.addPlayer("Jon","Sansa");
gameOfThronePlayers.addPlayer("Jon","Cersei");
gameOfThronePlayers.addPlayer("Cersei","Arya");
gameOfThronePlayers.addPlayer("Arya","Sansa");
gameOfThronePlayers.addPlayer("Arya","Sansa");// duplicate example, but would not duplicate in our acquianceList
gameOfThronePlayers.addPlayer("Sansa","Arya");// duplicate example, but would not duplicate in our acquianceList
gameOfThronePlayers.addPlayer("Tyrion","Sansa");
gameOfThronePlayers.addPlayer("Tyrion","Cersei");
gameOfThronePlayers.addPlayer("Sersei","Joffrey");
gameOfThronePlayers.printPlayer();
console.log(gameOfThronePlayers)

