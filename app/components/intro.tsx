import { css } from "@/styled-system/css"
import { container } from "../recipes/container"
import { header } from "../recipes/header"
import { grayBox } from "../recipes/gray-box"

const intro = css({
    padding: '20px 0',
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    lg: {
        flexDirection: 'row',
    }
})

const left = css({
    lg: {
        width: '50%',
    }
})

const right = css({
    lg: {
        width: '50%',
    }
})

const leftContainer = css({
    maxWidth: '500px'
})



export function Intro() {
    return (
        <div className={grayBox()}>
            <div className={container()}>
                <div className={intro}>
                    <div className={left}>
                        <div className={leftContainer}>
                            <h1 className={`${header()} ${css({ mb: 8 })}`}>Most important title on the page</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum ultricies, sem urna convallis metus, vel suscipit nibh lacus tincidunt ante
                            </p>
                        </div>
                    </div>
                    <div className={right}>
                        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                            <iframe
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                title="YouTube video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    border: 0,
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}