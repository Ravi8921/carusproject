import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:psxmpc/config/ps_colors.dart';
import 'package:psxmpc/core/vendor/provider/language/app_localization_provider.dart';

import '../../../../../../config/route/route_paths.dart';
import '../../../../../../core/vendor/constant/ps_constants.dart';
import '../../../../../../core/vendor/constant/ps_dimens.dart';
import '../../../../../../core/vendor/provider/offer/offer_provider.dart';
import '../../../../../../core/vendor/viewobject/holder/intent_holder/chat_history_intent_holder.dart';
import '../../../../../../core/vendor/viewobject/holder/intent_holder/user_intent_holder.dart';
import '../../../../../../core/vendor/viewobject/offer.dart';
import '../../../../common/bluemark_icon.dart';
import '../../../../common/ps_ui_widget.dart';

class OfferReceivedListItem extends StatelessWidget {
  const OfferReceivedListItem({
    Key? key,
    required this.offer,
    this.animationController,
    this.animation,
  }) : super(key: key);

  final Offer offer;
  final AnimationController? animationController;
  final Animation<double>? animation;

  @override
  Widget build(BuildContext context) {
    // final PsValueHolder psValueHolder =
    //     Provider.of<PsValueHolder>(context, listen: false);
    const Widget _spacingWidget = SizedBox(
      height: PsDimens.space8,
    );

    final Widget _dividerWidget = Divider(
      height: PsDimens.space1,
      color: PsColors.textPrimaryLightColorForLight,
      thickness: 0.2,
    );
    animationController!.forward();
    return AnimatedBuilder(
        animation: animationController!,
        child: InkWell(
          onTap: () {
            onTap(context);
          },
          child: Column(
            children: <Widget>[
              // _dividerWidget,
              Container(
                color: PsColors.baseColor,
                padding: const EdgeInsets.symmetric(
                    horizontal: PsDimens.space19, vertical: PsDimens.space8),
                child: Stack(
                  children: <Widget>[
                    Row(
                      crossAxisAlignment: CrossAxisAlignment.center,
                      mainAxisSize: MainAxisSize.max,
                      children: <Widget>[
                        Stack(
                          children: <Widget>[
                            Container(
                              width: PsDimens.space64,
                              height: PsDimens.space64,
                              child: PsNetworkCircleImageForUser(
                                photoKey: '',
                                imagePath: offer.item!.user!.userCoverPhoto,
                                boxfit: BoxFit.cover,
                                onTap: () {
                                  Navigator.pushNamed(
                                      context, RoutePaths.userDetail,
                                      arguments: UserIntentHolder(
                                          userId: offer.seller!.userId,
                                          userName: offer.seller!.userName));
                                },
                              ),
                            ),
                            Positioned(
                              bottom: 1,
                              right: 1,
                              child: Container(
                                width: PsDimens.space24,
                                height: PsDimens.space24,
                                child: PsNetworkCircleImage(
                                  photoKey: '',
                                  imagePath: offer.item!.defaultPhoto?.imgPath,
                                  boxfit: BoxFit.cover,
                                ),
                              ),
                            ),
                          ],
                        ),
                        const SizedBox(
                          width: PsDimens.space16,
                        ),
                        Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: <Widget>[
                            Row(
                              mainAxisAlignment: MainAxisAlignment.start,
                              children: <Widget>[
                                Text(
                                  offer.seller?.userName == ''
                                      ? 'default__user_name'.tr
                                      : offer.seller?.userName ?? '',
                                  overflow: TextOverflow.ellipsis,
                                  style: Theme.of(context)
                                      .textTheme
                                      .bodySmall!
                                      .copyWith(
                                          fontSize: 16,
                                          color: PsColors.mainColor,
                                          fontWeight: FontWeight.w800),
                                ),
                                if (offer.seller!.isVefifiedBlueMarkUser)
                                  const BluemarkIcon()
                              ],
                            ),
                            _spacingWidget,
                            Text(
                              offer.item!.title!,
                              maxLines: 1,
                              overflow: TextOverflow.ellipsis,
                              style: Theme.of(context)
                                  .textTheme
                                  .bodyMedium
                                  ?.copyWith(
                                      fontSize: 16,
                                      color: PsColors.textColor3,
                                      fontWeight: FontWeight.normal),
                            ),
                            // _spacingWidget,
                          ],
                        ),
                      ],
                    ),
                    Positioned(
                      bottom: 1,
                      right: 1,
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.end,
                        crossAxisAlignment: CrossAxisAlignment.end,
                        children: <Widget>[
                          const SizedBox(height: PsDimens.space4),
                          if (offer.hasSellerUnreadCount)
                            Container(
                              width: 20,
                              height: 20,
                              decoration: BoxDecoration(
                                color:
                                    PsColors.mainColor, //PsColors.primary500,
                                borderRadius:
                                    BorderRadius.circular(PsDimens.space28),
                              ),
                              child: Center(
                                child: Text(offer.sellerUnreadCount!,
                                    textAlign: TextAlign.center,
                                    overflow: TextOverflow.ellipsis,
                                    style: Theme.of(context)
                                        .textTheme
                                        .bodySmall!
                                        .copyWith(
                                            color: PsColors.baseColor,
                                            fontSize: 10)),
                              ),
                            ),
                          Text(
                            offer.addedDateStr!,
                            overflow: TextOverflow.ellipsis,
                            style: Theme.of(context)
                                .textTheme
                                .bodySmall!
                                .copyWith(color: PsColors.textColor3),
                          ),
                          const SizedBox(height: PsDimens.space4),
                        ],
                      ),
                    )
                  ],
                ),
              ),
              _dividerWidget
            ],
          ),
        ),
        builder: (BuildContext context, Widget? child) {
          return FadeTransition(
              opacity: animation!,
              child: Transform(
                  transform: Matrix4.translationValues(
                      0.0, 100 * (1.0 - animation!.value), 0.0),
                  child: child));
        });
  }

  Future<void> onTap(BuildContext context) async {
    final OfferListProvider provider =
        Provider.of<OfferListProvider>(context, listen: false);
    print(offer.item!.id);
    final dynamic returnData = await Navigator.pushNamed(
        context, RoutePaths.chatView,
        arguments: ChatHistoryIntentHolder(
            chatFlag: PsConst.CHAT_FROM_BUYER,
            itemId: offer.item!.id,
            buyerUserId: offer.buyerUserId,
            sellerUserId: offer.sellerUserId,
            userCoverPhoto: offer.buyer!.userCoverPhoto,
            userName: offer.buyer!.userName,
            itemDetail: offer.item));

    if (returnData == null) {
      provider.loadDataList();
    }
  }
}