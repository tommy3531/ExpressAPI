exports.getProfile = (req, res, next) => {
    res.status(200).json({
        posts:[{title: "Profile", content: 'This is the user profile!'}]
    });

};

exports.getMember = (req, res, next) => {
    res.status(200).json({
        posts:[{title: "Member", content: 'This is the member area!'}]
    });

};
