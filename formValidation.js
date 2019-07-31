function validateForm() {
    var discord = document.getElementById("discordinput").value;
    var steam = document.getElementById("steam").value;
    var battlenet = document.getElementById("battlenet").value;
    var rockstar = document.getElementById("rockstar").value;
    var hashdiscord = discord.indexOf("#");
    var hashBattleNet = battlenet.indexOf("#");
    if (steam == "" && rockstar == "" && discord == "" && battlenet == "") {
        document.getElementById("emptyError").innerHTML = "Please enter at least 1 field!";
        document.getElementById("discordinput").style.backgroundColor = "#ff918f";
        document.getElementById("steam").style.backgroundColor = "#ff918f";
        document.getElementById("rockstar").style.backgroundColor = "#ff918f";
        document.getElementById("battlenet").style.backgroundColor = "#ff918f";
        return false;
    }
    if (discord != "") {
        if (!discord.includes(hashdiscord) || isNaN(parseInt(discord.substr(hashdiscord + 1, discord.length)))) {
            document.getElementById("discordError").innerHTML = "Please enter a valid Discord tag.";
            document.getElementById("discordinput").style.backgroundColor = "#ff918f";
            return false;
        }
    }
    if (battlenet != "") {
        if (!battlenet.includes(hashBattleNet) || isNaN(parseInt(battlenet.substr(hashBattleNet + 1, battlenet.length)))) {
            document.getElementById("battlenetError").innerHTML = "Please enter a valid Battle.Net tag.";
            document.getElementById("battlenet").style.backgroundColor = "#ff918f";
            return false;
        }
    }
    else {
        return true;
    }
}