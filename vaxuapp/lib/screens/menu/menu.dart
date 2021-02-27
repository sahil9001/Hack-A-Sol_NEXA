import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:vaxuapp/screens/menu/tabs/check/audiorecord.dart';
import 'package:vaxuapp/screens/menu/tabs/city/details_screen.dart';
import 'package:vaxuapp/screens/menu/tabs/statistics/home_screen.dart';
import 'package:vaxuapp/screens/menu/tabs/hospitals/hospital_screen.dart';
import 'package:vaxuapp/screens/menu/tabs/profile/profile.dart';

class MenuScreen extends StatefulWidget {
  @override
  _MenuScreenState createState() => _MenuScreenState();
}

class _MenuScreenState extends State<MenuScreen> {
  int _currentIndex = 0;
  @override
  Widget build(BuildContext context) {
    Widget child = Container();

    switch (_currentIndex) {
      case 0:
        child = HomeScreen();
        break;

      case 1:
        child = DetailsScreen();
        break;

      case 2:
        child = HospitalScreen();
        break;

      case 3:
        child = SoundScreen();
        break;

      case 4:
        child = ProfileScreen();
        break;
    }

    return Scaffold(
        body: SizedBox.expand(child: child), // new
        bottomNavigationBar: _bottomtab());
  }

  Widget _bottomtab() {
    return BottomNavigationBar(
      type: BottomNavigationBarType.fixed,
      onTap: (int index) => setState(() => _currentIndex = index),
      selectedItemColor: Colors.lightGreen,
      currentIndex: _currentIndex,
      items: [
        new BottomNavigationBarItem(
          icon: Icon(Icons.graphic_eq),
          label: "Statistics",
        ),
        new BottomNavigationBarItem(
          icon: Icon(Icons.local_activity),
          label: "City",
        ),
        new BottomNavigationBarItem(
          icon: Icon(Icons.local_hospital),
          label: "Hospitals",
        ),
        new BottomNavigationBarItem(
          icon: Icon(Icons.coronavirus),
          label: "Check",
        ),
        new BottomNavigationBarItem(icon: Icon(Icons.person), label: "Profile"),
      ],
    );
  }
}
