import 'package:flutter/material.dart';

import 'package:vaxuapp/screens/menu/tabs/profile/widgets/profile_body.dart';

class ProfileScreen extends StatelessWidget {
  static String routeName = "/profile";
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Body(),
    );
  }
}
