(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},15:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(4),i=n.n(r),s=(n(15),n(1)),c=n(5),u=n(8),l=n(6),h=n(9),d=n(7),p=n.n(d),w=function e(t){Object(s.a)(this,e),this.scale=t,this.rotation=0,this.points=[]};var f=function(e){var t,n=[],o=e.windowWidth,a=e.windowHeight;function r(t){var n=function(t){var n=e.createVector(0,-t),o=e.createVector(0,0),a=e.createVector(0,0);return o.x=n.x*e.cos(120)-n.y*e.sin(120),o.y=n.x*e.sin(120)+n.y*e.cos(120),a.x=n.x*e.cos(240)-n.y*e.sin(240),a.y=n.x*e.sin(240)+n.y*e.cos(240),[n,o,a]}(.75*t),o=[];return n.forEach(function(t){var n=e.createVector(0,0),a=e.createVector(0,0);n.x=t.x*e.cos(-15)-t.y*e.sin(-15),n.y=t.x*e.sin(-15)+t.y*e.cos(-15),a.x=t.x*e.cos(15)-t.y*e.sin(15),a.y=t.x*e.sin(15)+t.y*e.cos(15),o.push(n,a)}),o}e.setup=function(){e.createCanvas(o,a),e.angleMode(e.DEGREES),e.frameRate(30),e.background(255,255,255),e.noFill(),e.strokeWeight(15),e.stroke(200),t=(1/(e.windowWidth/e.windowHeight-.13)*.64+1.26)*e.windowWidth/1.4;for(var i=0;i<25;i++)n.push(new w(.04*i)),n[i].points=n[i].points=r(t)},e.draw=function(){e.background(0);var i,s=.001/a*e.mouseY+.0015,c=48/o*e.mouseX-24;null!=e.rotationX&&0!==e.rotationX&&(s=.0025-.005/360*e.rotationX,c=e.rotationY);for(var u=0;u<n.length;u++)n[u].scale>1&&(n.splice(u,1),n.unshift(new w(0)),n[0].points=n[u].points=r(t)),n[u].scale+=s,n[u].rotation=c*n[u].scale,i=n[u],e.push(),e.translate(e.windowWidth/2,e.windowHeight/2),e.rotate(i.rotation),e.scale(i.scale),e.beginShape(),i.points.forEach(function(t){e.vertex(t.x,t.y)}),e.endShape(e.CLOSE),e.pop()}},m=(n(17),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"app"},a.a.createElement("header",{className:"header"},a.a.createElement("h1",{className:"header__title"},"Code_Swirls"),a.a.createElement("span",{className:"header__subtitle"},"Work in progress.")),a.a.createElement(p.a,{sketch:f}))}}]),t}(o.Component));i.a.render(a.a.createElement(m,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.47a7c3f2.chunk.js.map