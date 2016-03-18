describe('When access Controller', function () {
    beforeEach(module('app'));

    var $controller,$filter,commentService;

    beforeEach(inject(function (_$controller_,_$filter_,_commentService_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
        $filter = _$filter_;
        commentService = _commentService_;
    }));

    describe('Test comment service', function () {
      it('should have Auth service be defined', function () {
          expect(commentService).toBeDefined();
      });
      it('should save a user', function() {
        var comment = {'text' : 'abcd','id' : '','time':'','active' : ''};

        commentService.save(comment);
        var comments = commentService.list();
        expect(comments[0].text).toBe(comment.text);
        expect(comments[0].active).toBe(false);
      });
    });

    describe('Test comment Controller', function () {
        it('Get Initail List', function () {
            var controller = $controller('commentController');
            expect(controller.comments).toEqual([]);
        });
        it('Save Data', function () {
            var controller = $controller('commentController');
            controller.newcomment = {'text' : 'abcd','id' : '','time':'','active' : ''}
            controller.savecomment();
            expect(controller.comments.length).toEqual(1);
        });
        it('Set Filter Type', function () {
            var controller = $controller('commentController');
            controller.SetfilterType();
            expect(controller.filterType).toEqual(undefined);
            controller.SetfilterType(true);
            expect(controller.filterType).toEqual(true);
            controller.SetfilterType(false);
            expect(controller.filterType).toEqual(false);
        });
    });

    describe('Test comment Service', function () {
        it('Get Initail List', function () {
            var controller = $controller('commentController',{});
            expect(controller.comments).toEqual([]);
        });
    });

});