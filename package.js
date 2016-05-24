//I've submitted a PR to the base branch with our updates. Hopefully he'll merge those in soon and we'll be able to drop this branch.
Package.describe({
    name: 'hellotech:moment-timezone',
    summary: 'Timezone support for moment.js, packaged for Meteor',
    version: '0.5.4',
    git: 'https://github.com/HelloTech/meteor-moment-timezone'
});

Package.on_use(function (api, where) {
    var where = where || ['client', 'server'];
    var momentPackageName = !!Package.onUse ? "momentjs:moment@2.13.1" : "moment";
    
    api.use(momentPackageName, where);
    
    if (api.imply) {
        api.imply(momentPackageName, where);
    }
    
    api.add_files('preFix.js', where);
    api.add_files('lib/moment-timezone-with-data.js', where);
    api.add_files('postFix.js', where);
});