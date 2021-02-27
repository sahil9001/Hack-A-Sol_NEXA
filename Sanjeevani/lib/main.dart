import 'package:flutter/material.dart';
import 'package:vaxuapp/screens/login/login.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Covid Demo',
      routes: {
        '/': (context) => LoginPage(),
        '/login': (context) => LoginPage(),
      },
      theme: ThemeData(
        primarySwatch: Colors.green,
      ),
    );
  }
}
