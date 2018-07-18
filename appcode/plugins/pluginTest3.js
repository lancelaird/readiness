
iFrequencyInSeconds = 15;
sVersionPlugin = "20180718r001";
sNamePlugin = "Test Plugin 3 at 15 seconds";
sDescriptionPluginShort = "Performs a test every 15 seconds";
sDescriptionPluginLong = "Performs a TODO SOME KIND OF TEST test every 15 seconds (four times per minute)";

module.exports = {

   getDesiredFrequencyInSeconds: function(log) {
      return iFrequencyInSeconds;
   },
   getPluginVersion: function(log) {
      return sVersionPlugin;
   },
   getPluginDescriptionShort: function(log) {
      return sDescriptionPluginShort;
   },
   getPluginDescriptionLong: function(log) {
      return sDescriptionPluginLong;
   },
   getPluginName: function(log) {
      return sNamePlugin;
   }


};
