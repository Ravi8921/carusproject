import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart' as googlemap;
import 'package:latlong2/latlong.dart';
import 'package:psxmpc/config/route/route_paths.dart';
import 'package:psxmpc/core/vendor/constant/ps_constants.dart';
import 'package:psxmpc/core/vendor/viewobject/holder/intent_holder/google_map_pin_call_back_holder.dart';
import 'package:psxmpc/core/vendor/viewobject/holder/intent_holder/map_pin_intent_holder.dart';

class MapForGoogle extends StatelessWidget {
  const MapForGoogle(
      {required this.updateMapController,
     required this.googleMapController,
      required this.latLng,
      required this.userInputAddress,
      required this.updateGoogleMap,
      required this.zoom});
  final Function? updateMapController;
  final googlemap.GoogleMapController? googleMapController;
  final LatLng latLng;
  final TextEditingController userInputAddress;
  final Function updateGoogleMap;
  final double zoom;
  @override
  Widget build(BuildContext context) {
    final googlemap.CameraPosition kGooglePlex = googlemap.CameraPosition(
        target: googlemap.LatLng(latLng.latitude, latLng.longitude),
        zoom: zoom,
      );
    return googlemap.GoogleMap(
        onMapCreated: updateMapController as void Function(
            googlemap.GoogleMapController)?,
        initialCameraPosition: kGooglePlex,
        circles: <googlemap.Circle>{}..add(googlemap.Circle(
            circleId: googlemap.CircleId(userInputAddress.toString()),
            center: googlemap.LatLng(latLng.latitude, latLng.longitude),
            radius: 50,
            fillColor: Colors.blue.withOpacity(0.7),
            strokeWidth: 3,
            strokeColor: Colors.redAccent,
          )),
        onTap: (googlemap.LatLng latLngr) async {
          FocusScope.of(context).requestFocus(FocusNode());
          final dynamic result = await Navigator.pushNamed(
              context, RoutePaths.googleMapPin,
              arguments: MapPinIntentHolder(
                  flag: PsConst.PIN_MAP,
                  mapLat: latLng.latitude.toString(),
                  mapLng: latLng.longitude.toString()));
          if (result != null && result is GoogleMapPinCallBackHolder) {
            updateGoogleMap(result.latLng!.latitude, result.latLng!.longitude,
                result.address);
          }
        });
  }
}
