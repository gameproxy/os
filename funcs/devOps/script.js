var devOps = {
    updateFromGit: function() {
        alert(_("PlayBox OS is updating via Git. It will restart when the update has finished."), _("Updating..."), []);

        bc.post("devops", ["updateFromGit"]);
    }
};