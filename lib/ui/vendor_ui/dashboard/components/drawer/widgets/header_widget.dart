import 'package:flutter/material.dart';
import 'package:psxmpc/config/ps_colors.dart';
import 'package:psxmpc/core/vendor/provider/language/app_localization_provider.dart';
import '../../../../../../core/vendor/constant/ps_dimens.dart';
import '../../../../../../core/vendor/utils/utils.dart';

class DrawerHeaderWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return DrawerHeader(
      child: Column(
        mainAxisSize: MainAxisSize.max,
        mainAxisAlignment: MainAxisAlignment.end,
        children: <Widget>[
          Image.asset(
            'assets/images/flutter_buy_and_sell_logo.png',
            width: PsDimens.space40,
            height: PsDimens.space40,
          ),
          const SizedBox(
            height: PsDimens.space4,
          ),
          Text(
            'app_name'.tr,
            style: Theme.of(context).textTheme.titleMedium!.copyWith(
                color: Utils.isLightMode(context)
                    ? PsColors.secondary800
                    : PsColors.white,
                fontSize: 18),
          ),
          const SizedBox(
            height: PsDimens.space44,
          ),
        ],
      ),
      decoration: BoxDecoration(
          color:
              Utils.isLightMode(context) ? PsColors.primary50 : Colors.black12),
    );
  }
}
