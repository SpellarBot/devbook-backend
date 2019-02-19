const mongoose = require("../Models/userModel");
const User = mongoose.model("userModel");

mongoose.connect("mongodb://localhost/devbook");

mongoose.Promise = Promise;

module.exports = {
  //(POST Request) Create new user in the database
  create: (req, res) => {
    User.create({
      userName: req.body.userName,
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      profilePic: req.body.profilePic,
      location: req.body.location,
      gitHubUrl: req.body.gitHubUrl,
      employer: req.body.employer,
      specialty: req.body.specialty,
      projects: req.body.projects
    }).then(newUser => {
      console.log(`Hey Check Out the New User ${newUser}`);
      // res.redirect('/success')
      res.redirect(`/user/${newUser.id}`);
    });
  },

  //(DELETE Request) Delete a User Profile
  destroyProfile: (req, res) => {
    User.findOneAndRemove({ _id: req.params.id }).then(user => {
      res.redirect(`/user`);
    });
  },

  // (GET Request) Render form to update a single user
  editProfile: (req, res) => {
    User.findOne({ _id: req.params.id }).then(user => {
      res.render("userViews/updateUserForm.hbs", { user });
    });
  },

  //(GET Request) Render new user form
  new: (req, res) => {
    res.render("");
  },

  // (GET Request) Render a View to Show one User Profile
  profile: (req, res) => {
    User.findOne({ _id: req.params.id }).then(singleUser => {
      res.json(singleUser);
    });
  },

  //  (GE T Request) List query results
  //   searchResults: (req, res) => {
  //     User.find({}).then(users => {
  //       res.render("userViews/usersIndex", { users });
  //     });
  //   },

  //(GET Request) Render a view tells users their profile has been created
  success: (req, res) => {
    res.render("userViews/newUserSuccessPage");
  },

  // (PUT Request) Updates user profile in the database
  updateProfile: (req, res) => {
    User.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          userName: req.body.userName,
          email: req.body.email,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          profilePic: req.body.profilePic,
          location: req.body.location,
          gitHubUrl: req.body.gitHubUrl,
          employer: req.body.employer,
          specialty: req.body.specialty,
          projects: req.body.projects
        }
      }
    ).then(user => {
      res.redirect(`/user/${user.id}`);
    });
  }
};
