import 'package:flutter/material.dart';
import 'package:vaxuapp/screens/menu/tabs/profile/profile.dart';

class HelpScreen extends StatefulWidget {
  @override
  _HelpScreenState createState() => _HelpScreenState();
}

class _HelpScreenState extends State<HelpScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: IconButton(
          icon: Icon(Icons.arrow_back_ios),
          onPressed: () {
            Navigator.of(context)
                .pop(MaterialPageRoute(builder: (BuildContext context) => ProfileScreen()));
          },
        ),
      ),
      body: Column(
        children: [
          Center(
            child: CircleAvatar(
              backgroundImage: AssetImage("assets/icons/icon.png"),
              backgroundColor: Colors.white10,
              radius: 120.0,
            ),
          ),
          Center(
            child: Text(
              "Creators:",
              style: TextStyle(fontSize: 30),
            ),
          ),
          SizedBox(
            height: 5,
          ),
          Center(
            child: Text(
              "Siddharth Mishra",
              style: TextStyle(fontSize: 20),
            ),
          ),
          SizedBox(
            height: 5,
          ),
          Center(
            child: Text(
              "Sahil Silare",
              style: TextStyle(fontSize: 20),
            ),
          ),
          SizedBox(
            height: 5,
          ),
          Center(
            child: Text(
              "Amitesh Aggrawal",
              style: TextStyle(fontSize: 20),
            ),
          ),
          SizedBox(
            height: 5,
          ),
          Center(
            child: Text(
              "Prakhar Asaiya",
              style: TextStyle(fontSize: 20),
            ),
          )
        ],
      ),
    );
  }
}
