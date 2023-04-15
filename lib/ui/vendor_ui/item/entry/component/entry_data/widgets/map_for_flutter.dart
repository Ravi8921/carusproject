import 'package:flutter/material.dart';
import 'package:flutter_map/flutter_map.dart';
import 'package:latlong2/latlong.dart';
import 'package:psxmpc/config/ps_colors.dart';
import 'package:psxmpc/config/route/route_paths.dart';
import 'package:psxmpc/core/vendor/constant/ps_constants.dart';
import 'package:psxmpc/core/vendor/viewobject/holder/intent_holder/map_pin_call_back_holder.dart';
import 'package:psxmpc/core/vendor/viewobject/holder/intent_holder/map_pin_intent_holder.dart';

class MapForFlutter extends StatelessWidget {
  const MapForFlutter(
      {required this.flutterMapController,
      required this.latLng,
      required this.zoom,
      required this.updateFlutterMap});
  final MapController flutterMapController;
  final LatLng latLng;
  final double zoom;
  final Function updateFlutterMap;
  @override
  Widget build(BuildContext context) {
    return FlutterMap(
      mapController: flutterMapController,
      options: MapOptions(
          center: latLng, //LatLng(51.5, -0.09), //LatLng(45.5231, -122.6765),
          zoom: zoom, //10.0,
          onTap: (dynamic tapPosition, LatLng latLngr) async {
            FocusScope.of(context).requestFocus(FocusNode());
            final dynamic result = await Navigator.pushNamed(
                context, RoutePaths.mapPin,
                arguments: MapPinIntentHolder(
                    flag: PsConst.PIN_MAP,
                    mapLat: latLng.latitude.toString(),
                    mapLng: latLng.longitude.toString()));
            if (result != null && result is MapPinCallBackHolder) {
              updateFlutterMap(result.latLng!.latitude,
                  result.latLng!.longitude, result.address, result.address);
            }
          }),
      children: <Widget>[
        TileLayer(
          urlTemplate: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
        ),
        MarkerLayer(markers: <Marker>[
          Marker(
            width: 80.0,
            height: 80.0,
            point: latLng,
            builder: (BuildContext ctx) => Container(
              child: IconButton(
                icon: Icon(
                  Icons.location_on,
                  color: PsColors.mainColor,
                ),
                iconSize: 45,
                onPressed: () {},
              ),
            ),
          )
        ])
      ],
    );
  }
}
