class User{
  constructor(){
    this.id = 0;
    this.username = '';
    this.branch_id = 0;
    this.password = '';
    this.name = '';
    this.email = '';
    this.enabled = false;
    this.last_login = null;
    this.sequence = 0;
  }
}

module.exports = User;
