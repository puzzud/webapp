var AppTitle = {};

/** @constructor */
AppTitle.Main = function(game)
{
  
};

AppTitle.Main.prototype.run = function()
{
  console.log("AppTitle.Main.prototype.run");
  
  // TODO: Move & abstract into platform module.
  if(window.nw !== undefined)
  {
    var nwWindow = nw.Window.get();
    nwWindow.show();
  }
};
